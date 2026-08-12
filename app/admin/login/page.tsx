import { LoginForm } from "@/components/LoginForm/LoginForm";
import styles from "./page.module.css";

interface LoginPageProps {
  searchParams: Promise<{ from?: string }>;
}

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const resolvedSearchParams = await searchParams;
  const redirectTo =
    resolvedSearchParams.from && resolvedSearchParams.from.startsWith("/admin")
      ? resolvedSearchParams.from
      : "/admin";

  return (
    <main className={styles.main}>
      <LoginForm redirectTo={redirectTo} />
    </main>
  );
}
