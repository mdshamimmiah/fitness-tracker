

const Balance = () => {
    return (
        <div className="ml-6 flex gap-5">
           <div className="text-center bg-slate-400 w-52 rounded-xl h-32">
            <h1>Total Payment</h1>
           <h1 className="text-2xl"> $400</h1>
           </div>
           <div className="text-center bg-slate-400 w-52 rounded-xl h-32">
            <h1>Total Balance</h1>
           <h1 className="text-2xl"> $800</h1>
           </div>
        </div>
    );
};

export default Balance;