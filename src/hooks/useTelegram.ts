const tg = (window as any).Telegram.WebApp;
export function useTelegram() {

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        tg,
        user: tg.initDataUnsafe,
        onToggleButton
    }
}