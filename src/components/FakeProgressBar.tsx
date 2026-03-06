function FakeProgressBar() {
    const totalSlots = 15;
    const filledSlots = 8; // tu peux changer ce nombre pour simuler
    const percentage = (filledSlots / totalSlots) * 100;

    return (
        <div className="mb-6">
            <div className="flex justify-between mb-1 text-white font-semibold">
                <span>Participants : {filledSlots}/{totalSlots}</span>
                <span>{Math.round(percentage)}%</span>
            </div>
            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-4 bg-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
export default FakeProgressBar;