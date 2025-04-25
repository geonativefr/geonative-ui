import { computed } from 'vue';

export function usePlatformDetect() {
  // Detect the platform
  const isMacOS = computed(() => navigator.userAgent.includes('Mac'));
  const isWindows = computed(() => navigator.userAgent.includes('Win'));
  const isLinux = computed(() => navigator.userAgent.includes('Linux'));
  const isIOS = computed(() => navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad'));
  const isAndroid = computed(() => navigator.userAgent.includes('Android'));

  return {
    isMacOS,
    isWindows,
    isLinux,
    isIOS,
    isAndroid,
  };
}
