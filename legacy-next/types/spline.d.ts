// types/spline.d.ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url?: string;
          'loading-anim-type'?: string;
          'data-loaded'?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {}