import { useCalculator } from "@/hooks/useCalculator";

const HistoryPanel = () => {
  const { history, clearHistory, useHistoryItem } = useCalculator();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-full flex flex-col transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Calculation History</h2>
      <div className="flex-grow overflow-auto history-scroll">
        {history.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No calculations yet. Use the calculator to get started.
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                onClick={() => useHistoryItem(item)}
              >
                <div className="text-sm text-gray-600 dark:text-gray-300 font-mono mb-1">{item.input}</div>
                <div className="text-lg text-gray-900 dark:text-white font-mono">{item.result}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between">
          <button 
            className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={clearHistory}
          >
            Clear All
          </button>
          <button 
            className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => {
              // This would be implemented to save history to local storage or database
              console.log("Save history feature would be implemented here");
            }}
          >
            Save History
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryPanel;
