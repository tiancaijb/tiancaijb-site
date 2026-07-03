import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { getLangOrFallback } from "@/lib/lang";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = getLangOrFallback(lang);

  return (
    <>
      <Nav lang={validLang} />
      <main className="flex-1">{children}</main>
      <Footer lang={validLang} />
    </>
  );
}
