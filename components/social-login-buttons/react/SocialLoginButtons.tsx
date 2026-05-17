import "../styles.css";
import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// Built-in inline SVG icons for known providers
// ---------------------------------------------------------------------------

const GoogleIcon = () => (
  <svg
    className="slb__icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="slb__icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
    />
  </svg>
);

const AppleIcon = () => (
  <svg
    className="slb__icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.36.74 3.18.76 1.2-.21 2.35-.91 3.63-.81 1.55.13 2.71.73 3.45 1.85-3.2 1.89-2.44 6.03.68 7.22-.6 1.26-1.27 2.49-2.94 3.86zM12.03 7.25c-.13-2.67 2.05-4.87 4.56-5.25.34 2.99-2.68 5.17-4.56 5.25z" />
  </svg>
);

const MicrosoftIcon = () => (
  <svg
    className="slb__icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
    <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
    <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
    <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    className="slb__icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="slb__icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="#0A66C2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ProviderId =
  | "google"
  | "github"
  | "apple"
  | "microsoft"
  | "twitter"
  | "linkedin"
  | string;

export type Provider = {
  id: ProviderId;
  /** Overrides the default "Continue with {Provider}" label. */
  label?: string;
  /** Overrides the built-in SVG icon. Pass null to suppress the icon. */
  icon?: ReactNode;
};

export type SocialLoginButtonsProps = {
  /** Ordered list of providers to render. */
  providers: Provider[];
  /** Called with the provider id when the user clicks a button. Wire your auth flow here. */
  onProviderClick: (providerId: string) => void | Promise<void>;
  /** If set, renders a labelled separator below the buttons. Intended to sit between these buttons and a sibling email form. */
  dividerText?: string;
  /** Stacked (default) renders buttons vertically. Row renders them horizontally with wrapping. */
  layout?: "stacked" | "row";
  /** Default applies neutral themed styling. Minimal is text-only with no provider-specific coloring. */
  style?: "default" | "minimal";
  /** Extra class applied to the root element. */
  className?: string;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const BUILTIN_ICONS: Record<string, ReactNode> = {
  google: <GoogleIcon />,
  github: <GitHubIcon />,
  apple: <AppleIcon />,
  microsoft: <MicrosoftIcon />,
  twitter: <TwitterIcon />,
  linkedin: <LinkedInIcon />,
};

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function resolveLabel(provider: Provider): string {
  if (provider.label) return provider.label;
  return `Continue with ${capitalize(provider.id)}`;
}

function resolveIcon(provider: Provider): ReactNode {
  // Explicit icon prop wins (including null to suppress)
  if (provider.icon !== undefined) return provider.icon;
  // Fall back to built-in icon for known providers
  return BUILTIN_ICONS[provider.id] ?? null;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function SocialLoginButtons({
  providers,
  onProviderClick,
  dividerText,
  layout = "stacked",
  style = "default",
  className,
}: SocialLoginButtonsProps) {
  const rootClass = [
    "slb",
    `slb--${layout}`,
    `slb--${style}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass}>
      {providers.map((provider) => {
        const icon = resolveIcon(provider);
        const label = resolveLabel(provider);

        return (
          <button
            key={provider.id}
            type="button"
            className="slb__button"
            data-provider={provider.id}
            onClick={() => onProviderClick(provider.id)}
          >
            {icon}
            <span className="slb__label">{label}</span>
          </button>
        );
      })}

      {dividerText && (
        <div
          className="slb__divider"
          role="separator"
          aria-label={dividerText}
        >
          <span className="slb__divider-text">{dividerText}</span>
        </div>
      )}
    </div>
  );
}
