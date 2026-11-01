/**
 * Vidown Content Script TypeScript Definitions
 * Type contracts for Vidown core media detection, extractors, and event bus
 */

export type MediaType = 'video' | 'audio' | 'no_watermark_video' | 'subtitles' | 'audio_channel' | 'image';

export interface MediaItem {
  type: MediaType;
  ext?: string;
  url: string | { videoUrl?: string; audioUrl?: string };
  title?: string;
  vid?: string | null;
  filename?: string;
  quality?: string;
  resolution?: string;
  platform?: string;
  sourceElement?: HTMLVideoElement | HTMLElement;
  thumbnail?: string;
  hasVideo?: boolean;
  widgetID?: string;
  sortValues?: {
    qualityValue?: number;
  };
}

export interface PlatformExtractor {
  name: string;
  match(url: string): boolean;
  extract(videoElement: HTMLVideoElement | HTMLElement, context?: { url?: string }): MediaItem | null;
  getCompanionInjectorScript?(): string;
  getVideoId?(url: string): string | null;
}

export interface StampedAttributes {
  vid?: string | null;
  detail?: {
    title?: string;
    url?: string;
    vid?: string;
    [key: string]: unknown;
  } | null;
}

export interface EventBus {
  on(event: string, callback: (...args: unknown[]) => void): EventBus;
  off(event: string, callback: (...args: unknown[]) => void): EventBus;
  emit(event: string, ...args: unknown[]): EventBus;
}

export interface VidownContentScriptInstance {
  bus: EventBus;
  providers: PlatformExtractor[];
  initialized: boolean;
  init(): void;
  detectMedia(videoElement: HTMLVideoElement | HTMLElement, pageUrl?: string): MediaItem | null;
}

declare global {
  interface Window {
    EE?: EventBus;
    __VIDOWN_CONTENT_SCRIPT__?: VidownContentScriptInstance;
  }
}
