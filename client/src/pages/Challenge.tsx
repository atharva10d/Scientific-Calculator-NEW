import { useState, useEffect, useRef } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type Question = {
  id: number;
  question: string;
  answer: number;
  difficulty: "easy" | "medium" | "hard";
};

type Score = {
  name: string;
  score: number;
  timestamp: string;
};

const SAMPLE_QUESTIONS: Question[] = [
  { id: 1, question: "2 + 3 × 4", answer: 14, difficulty: "easy" },
  { id: 2, question: "√(16) + 3²", answer: 13, difficulty: "easy" },
  { id: 3, question: "sin(45°) × cos(30°) + tan(60°)", answer: 2, difficulty: "medium" },
  { id: 4, question: "log(100) + ln(e²)", answer: 4, difficulty: "medium" },
  { id: 5, question: "∫₀¹ 2x dx", answer: 1, difficulty: "hard" },
];

const SAMPLE_LEADERBOARD: Score[] = [
  { name: "MathWizard", score: 950, timestamp: "2023-05-15" },
  { name: "CalcMaster", score: 840, timestamp: "2023-05-16" },
  { name: "You", score: 720, timestamp: "2023-05-17" },
  { name: "IntegralFan", score: 680, timestamp: "2023-05-18" },
  { name: "StatisticsPro", score: 550, timestamp: "2023-05-19" },
];

const Challenge = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(2);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>(SAMPLE_QUESTIONS);
  const [leaderboard, setLeaderboard] = useState<Score[]>(SAMPLE_LEADERBOARD);
  const [gameActive, setGameActive] = useState(true);
  const timerRef = useRef<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endGame();
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameActive, timeLeft]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = parseFloat(userAnswer) === currentQuestion.answer;
    
    setIsAnswerCorrect(isCorrect);
    
    if (isCorrect) {
      // Add points based on difficulty and remaining time
      const difficultyMultiplier = currentQuestion.difficulty === "easy" ? 1 : 
                                 currentQuestion.difficulty === "medium" ? 2 : 3;
      const timeBonus = Math.floor(timeLeft / 10);
      const pointsEarned = 100 * difficultyMultiplier + timeBonus;
      
      setScore(prevScore => prevScore + pointsEarned);
      toast({
        title: "Correct!",
        description: `+${pointsEarned} points`,
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect",
        description: `The correct answer is ${currentQuestion.answer}`,
        variant: "destructive",
      });
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
      setIsAnswerCorrect(null);
    } else {
      endGame();
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setUserAnswer("");
      setIsAnswerCorrect(null);
    }
  };

  const endGame = () => {
    setGameActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Update leaderboard if score is high enough
    const userScoreEntry = { name: "You", score, timestamp: new Date().toISOString().split('T')[0] };
    
    // Sort leaderboard and take top 5
    const updatedLeaderboard = [...leaderboard.filter(entry => entry.name !== "You"), userScoreEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    
    setLeaderboard(updatedLeaderboard);
    
    // Save score to database
    saveScore(userScoreEntry);
  };

  const saveScore = async (scoreEntry: Score) => {
    try {
      await apiRequest('POST', '/api/scores', scoreEntry);
    } catch (error) {
      console.error('Failed to save score:', error);
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setUserAnswer("");
    setIsAnswerCorrect(null);
    setTimeLeft(180);
    setScore(0);
    setGameActive(true);
  };

  const resetScores = async () => {
    try {
      await apiRequest('DELETE', '/api/scores');
      setLeaderboard([]);
      toast({
        title: "Scores Reset",
        description: "The leaderboard has been cleared",
        variant: "default",
      });
    } catch (error) {
      console.error('Failed to reset scores:', error);
      toast({
        title: "Error",
        description: "Failed to reset scores",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Challenge questions */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Calculator Challenge</h2>
            <div className="text-lg font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-md text-gray-800 dark:text-white">
              {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
            <div className="text-lg font-medium text-gray-800 dark:text-white mb-2">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className="text-gray-700 dark:text-gray-300">Calculate the value of the following expression and enter the result:</div>
            <div className="text-xl font-semibold text-center my-4 text-gray-900 dark:text-white">
              {questions[currentQuestionIndex].question}
            </div>
            
            <div className="mt-4">
              <label htmlFor="answer" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Answer:</label>
              <div className="relative">
                <input 
                  type="text" 
                  id="answer" 
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      checkAnswer();
                    }
                  }}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white p-2 ${
                    isAnswerCorrect === true ? 'border-green-500 ring-green-500' : 
                    isAnswerCorrect === false ? 'border-red-500 ring-red-500' : ''
                  }`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {userAnswer && (
                    <button 
                      onClick={() => setUserAnswer('')}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={goToPrevQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md ${
                currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Previous
            </button>
            <button 
              onClick={checkAnswer}
              disabled={!userAnswer || isAnswerCorrect !== null}
              className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
                !userAnswer || isAnswerCorrect !== null ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
            >
              Check Answer
            </button>
            <button 
              onClick={goToNextQuestion}
              className={`px-4 py-2 ${
                isAnswerCorrect === null ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300' : 'bg-blue-500 text-white'
              } rounded-md hover:bg-blue-600`}
            >
              Next
            </button>
          </div>
        </div>
        
        {/* Leaderboard */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Leaderboard</h2>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Score</div>
              <div className="text-lg font-semibold text-blue-500">{score} pts</div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-blue-500 h-2.5 rounded-full" 
                style={{ width: `${Math.min(100, (score / 1000) * 100)}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-2">
            {leaderboard.map((entry, index) => (
              <div 
                key={index}
                className={`flex justify-between items-center p-2 ${
                  entry.name === "You" 
                    ? "bg-blue-100 dark:bg-blue-900/30" 
                    : "bg-gray-100 dark:bg-gray-700"
                } rounded`}
              >
                <div className="flex items-center">
                  <span className="font-semibold text-blue-500 w-6">{index + 1}.</span>
                  <span className="text-gray-800 dark:text-white">{entry.name}</span>
                </div>
                <div className="font-semibold text-gray-800 dark:text-white">{entry.score} pts</div>
              </div>
            ))}

            {leaderboard.length === 0 && (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                No scores yet. Be the first to play!
              </div>
            )}
          </div>
          
          <div className="mt-6 space-y-2">
            {!gameActive && (
              <button 
                onClick={resetGame}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Play Again
              </button>
            )}
            <button 
              onClick={resetScores}
              className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Reset Scores
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
