import React, { useState, useEffect } from 'react';

function App() {
  const [cogs, setCogs] = useState(100);
  const [sellingPrice, setSellingPrice] = useState(200);
  const [costMultiplier, setCostMultiplier] = useState(0);
  const [profitMargin, setProfitMargin] = useState(0);
  const [roas, setRoas] = useState(0);

  useEffect(() => {
    // Calculate values whenever COGS or Selling Price changes
    const calculateValues = () => {
      const multiplier = sellingPrice / cogs;
      const margin = sellingPrice - cogs;
      const breakEvenRoas = sellingPrice / margin;

      setCostMultiplier(multiplier.toFixed(2));
      setProfitMargin(margin.toFixed(2));
      setRoas(breakEvenRoas.toFixed(2));
    };

    calculateValues();
  }, [cogs, sellingPrice]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex gap-5">
        <div className="bg-blue-600 text-white p-5 rounded-lg shadow-lg w-48">
          <div className="mb-4">
            <label htmlFor="cogs" className="block mb-1 text-sm">COGS</label>
            <input
              type="number"
              id="cogs"
              value={cogs}
              onChange={(e) => setCogs(parseFloat(e.target.value))}
              className="w-full px-3 py-2 rounded text-black"
            />
          </div>
          <div>
            <label htmlFor="sellingPrice" className="block mb-1 text-sm">Selling Price</label>
            <input
              type="number"
              id="sellingPrice"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(parseFloat(e.target.value))}
              className="w-full px-3 py-2 rounded text-black"
            />
          </div>
        </div>

        <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg w-48">
          <h3 className="text-sm mb-2">Cost Multiplier</h3>
          <div className="text-3xl font-bold">{costMultiplier}</div>
        </div>

        <div className="border-l-2 border-white h-24 self-center"></div>

        <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg w-48">
          <h3 className="text-sm mb-2">Profit Margin</h3>
          <div className="text-3xl font-bold">{profitMargin}</div>
        </div>

        <div className="border-l-2 border-white h-24 self-center"></div>

        <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg w-48">
          <h3 className="text-sm mb-2">B.E. ROAS</h3>
          <div className="text-3xl font-bold">{roas}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
