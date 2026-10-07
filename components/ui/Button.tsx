import Link from "next/link";
import type { ReactNode, ComponentProps } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "main" | "ghost";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonProps = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

/**
 * Button — either a <Link> (when `href` is given) or a <button>.
 * Variants: "main" (amber) | "ghost" (outline).
 */
export function Button(props: LinkProps | ButtonProps) {
  const { variant = "main", className, children } = props;

  const classes = cn(
    "btn",
    variant === "main" && "btn-main",
    variant === "ghost" && "btn-ghost",
    className
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}