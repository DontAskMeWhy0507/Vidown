using System;
using System.Diagnostics;
using System.IO;
using System.Threading;

class Program {
    static int Main(string[] args) {
        try {
            string dir = AppDomain.CurrentDomain.BaseDirectory;
            string script = Path.Combine(dir, "host.js");
            string node = @"C:\Program Files\nodejs\node.exe";
            if (!File.Exists(node)) {
                node = "node";
            }

            ProcessStartInfo psi = new ProcessStartInfo();
            psi.FileName = node;
            psi.Arguments = "\"" + script + "\"";
            psi.UseShellExecute = false;
            psi.RedirectStandardInput = true;
            psi.RedirectStandardOutput = true;
            psi.RedirectStandardError = false;
            psi.CreateNoWindow = true;

            using (Process p = Process.Start(psi)) {
                Thread tIn = new Thread(() => {
                    try {
                        using (Stream cin = Console.OpenStandardInput())
                        using (Stream pin = p.StandardInput.BaseStream) {
                            byte[] inBuf = new byte[8192];
                            int r;
                            while ((r = cin.Read(inBuf, 0, inBuf.Length)) > 0) {
                                pin.Write(inBuf, 0, r);
                                pin.Flush();
                            }
                        }
                    } catch {}
                });
                tIn.IsBackground = true;
                tIn.Start();

                Thread tOut = new Thread(() => {
                    try {
                        using (Stream pout = p.StandardOutput.BaseStream)
                        using (Stream cout = Console.OpenStandardOutput()) {
                            byte[] outBuf = new byte[8192];
                            int r;
                            while ((r = pout.Read(outBuf, 0, outBuf.Length)) > 0) {
                                cout.Write(outBuf, 0, r);
                                cout.Flush();
                            }
                        }
                    } catch {}
                });
                tOut.IsBackground = true;
                tOut.Start();

                p.WaitForExit();
                tOut.Join(500);
                return p.ExitCode;
            }
        } catch (Exception ex) {
            File.AppendAllText(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "host_error.log"), ex.ToString() + "\n");
            return 1;
        }
    }
}
