export {};

declare global {
  interface Window {
    Actual?: {
      IS_FAKE_WEB: boolean;
      ACTUAL_VERSION: string;
      openURLInBrowser: (url: string) => void;
    };

    __navigate?: ReturnType<import('react-router')['useNavigate']>;
  }
}
