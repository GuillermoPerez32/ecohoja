const SupportButton = () => {
    return (
        <div className="fixed right-4 bottom-4 z-50">
            <a
                className="bg-card border-muted-foreground flex items-center gap-2 rounded-lg border p-2 shadow"
                href="https://wa.me/+5356713029"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/whatsapp.png" alt="Whatsapp" className="size-6" />
                <span className="font-semibold">¿Necesitas ayuda?</span>
            </a>
        </div>
    );
};

export default SupportButton;
