import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center p-6" style={{ background: '#0e0e0e' }}>
            <div className="max-w-md w-full text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="font-heading text-canvas" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: '1' }}>404</h1>
                    <div className="h-px w-16 bg-ochre mx-auto"></div>
                </div>

                <div className="space-y-3">
                    <h2 className="font-heading text-canvas text-xl">Page Not Found</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        The page <span className="text-canvas opacity-80">"{pageName}"</span> could not be found.
                    </p>
                </div>

                <div className="pt-6">
                    <a
                        href={import.meta.env.BASE_URL}
                        className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-6 py-3 border border-ochre text-ochre hover:bg-ochre hover:bg-opacity-10 transition-colors font-body"
                    >
                        Return Home
                    </a>
                </div>
            </div>
        </div>
    )
}
