export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border bg-[#0f171e]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© 2025 Hardik Shah. All rights reserved.</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">Built with Next.js, Tailwind CSS, and shadcn/ui</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
