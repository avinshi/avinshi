/**
 * ROI Calculator Component
 * Interactive calculator to show cost savings with Avinshi AI agents
 * 
 * Features:
 * - Time savings calculator
 * - Cost savings calculator
 * - Custom industry presets
 * - ROI visualization
 * - Shareable results
 */

import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Users, Share2 } from 'lucide-react';

// Industry presets
const INDUSTRY_PRESETS = {
  software: {
    name: 'Software Development',
    avgHourlyRate: 75,
    avgTasksPerWeek: 40,
    avgTimePerTask: 2,
    automationRate: 0.70
  },
  customer_service: {
    name: 'Customer Service',
    avgHourlyRate: 25,
    avgTasksPerWeek: 100,
    avgTimePerTask: 0.5,
    automationRate: 0.80
  },
  marketing: {
    name: 'Marketing',
    avgHourlyRate: 60,
    avgTasksPerWeek: 30,
    avgTimePerTask: 3,
    automationRate: 0.65
  },
  sales: {
    name: 'Sales',
    avgHourlyRate: 50,
    avgTasksPerWeek: 50,
    avgTimePerTask: 1,
    automationRate: 0.60
  },
  finance: {
    name: 'Finance & Accounting',
    avgHourlyRate: 70,
    avgTasksPerWeek: 35,
    avgTimePerTask: 2.5,
    automationRate: 0.75
  },
  hr: {
    name: 'Human Resources',
    avgHourlyRate: 55,
    avgTasksPerWeek: 25,
    avgTimePerTask: 1.5,
    automationRate: 0.70
  },
  custom: {
    name: 'Custom',
    avgHourlyRate: 50,
    avgTasksPerWeek: 40,
    avgTimePerTask: 2,
    automationRate: 0.65
  }
};

// Plan pricing
const PLAN_PRICING = {
  developer: 29,
  team: 99,
  business: 299,
  enterprise: 999
};

interface ROIResults {
  weeklyTimeSaved: number;
  monthlyTimeSaved: number;
  yearlyTimeSaved: number;
  weeklyCostSaved: number;
  monthlyCostSaved: number;
  yearlyCostSaved: number;
  platformCost: number;
  netSavings: number;
  roi: number;
  breakEvenWeeks: number;
  tasksAutomated: number;
}

export default function ROICalculator() {
  // State
  const [industry, setIndustry] = useState<keyof typeof INDUSTRY_PRESETS>('software');
  const [teamSize, setTeamSize] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [tasksPerWeek, setTasksPerWeek] = useState(40);
  const [timePerTask, setTimePerTask] = useState(2);
  const [automationRate, setAutomationRate] = useState(70);
  const [planTier, setPlanTier] = useState<keyof typeof PLAN_PRICING>('team');
  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  // Load industry preset when changed
  useEffect(() => {
    if (industry !== 'custom') {
      const preset = INDUSTRY_PRESETS[industry];
      setHourlyRate(preset.avgHourlyRate);
      setTasksPerWeek(preset.avgTasksPerWeek);
      setTimePerTask(preset.avgTimePerTask);
      setAutomationRate(preset.automationRate * 100);
    }
  }, [industry]);
  
  // Calculate ROI
  const calculateROI = () => {
    const automationDecimal = automationRate / 100;
    
    // Time savings
    const weeklyHoursSaved = (tasksPerWeek * timePerTask * automationDecimal * teamSize);
    const monthlyHoursSaved = weeklyHoursSaved * 4.33; // Avg weeks per month
    const yearlyHoursSaved = weeklyHoursSaved * 52;
    
    // Cost savings
    const weeklyCostSaved = weeklyHoursSaved * hourlyRate;
    const monthlyCostSaved = monthlyHoursSaved * hourlyRate;
    const yearlyCostSaved = yearlyHoursSaved * hourlyRate;
    
    // Platform cost
    const platformCostMonthly = PLAN_PRICING[planTier];
    const platformCostYearly = platformCostMonthly * 12;
    
    // Net savings
    const netMonthlySavings = monthlyCostSaved - platformCostMonthly;
    const netYearlySavings = yearlyCostSaved - platformCostYearly;
    
    // ROI
    const roi = (netYearlySavings / platformCostYearly) * 100;
    
    // Break-even
    const breakEvenWeeks = platformCostMonthly / weeklyCostSaved;
    
    // Tasks automated
    const tasksAutomated = tasksPerWeek * automationDecimal * teamSize;
    
    setResults({
      weeklyTimeSaved: weeklyHoursSaved,
      monthlyTimeSaved: monthlyHoursSaved,
      yearlyTimeSaved: yearlyHoursSaved,
      weeklyCostSaved: weeklyCostSaved,
      monthlyCostSaved: monthlyCostSaved,
      yearlyCostSaved: yearlyCostSaved,
      platformCost: platformCostYearly,
      netSavings: netYearlySavings,
      roi: roi,
      breakEvenWeeks: breakEvenWeeks,
      tasksAutomated: tasksAutomated
    });
    
    setShowResults(true);
  };
  
  // Share results
  const shareResults = () => {
    if (!results) return;
    
    const text = `I could save $${results.netSavings.toLocaleString()} per year with Avinshi AI agents! Calculate your savings: https://avinshi.com/roi-calculator`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Avinshi ROI Calculator Results',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ROI Calculator
        </h1>
        <p className="text-xl text-gray-600">
          See how much time and money you can save with AI agents
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calculator className="w-6 h-6 mr-2" />
            Your Details
          </h2>
          
          {/* Industry */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value as keyof typeof INDUSTRY_PRESETS)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(INDUSTRY_PRESETS).map(([key, preset]) => (
                <option key={key} value={key}>
                  {preset.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Team size */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Team Size
            </label>
            <input
              type="number"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              min="1"
              max="1000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              Number of people who will use AI agents
            </p>
          </div>
          
          {/* Hourly rate */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Hourly Rate ($)
            </label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              min="1"
              max="500"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Tasks per week */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tasks Per Week (per person)
            </label>
            <input
              type="number"
              value={tasksPerWeek}
              onChange={(e) => setTasksPerWeek(Number(e.target.value))}
              min="1"
              max="200"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Time per task */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Avg Time Per Task (hours)
            </label>
            <input
              type="number"
              value={timePerTask}
              onChange={(e) => setTimePerTask(Number(e.target.value))}
              min="0.1"
              max="40"
              step="0.5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Automation rate */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Automation Rate: {automationRate}%
            </label>
            <input
              type="range"
              value={automationRate}
              onChange={(e) => setAutomationRate(Number(e.target.value))}
              min="30"
              max="95"
              step="5"
              className="w-full"
            />
            <p className="text-sm text-gray-500 mt-1">
              Percentage of tasks that can be automated
            </p>
          </div>
          
          {/* Plan tier */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Plan Tier
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(PLAN_PRICING).map(([key, price]) => (
                <button
                  key={key}
                  onClick={() => setPlanTier(key as keyof typeof PLAN_PRICING)}
                  className={`p-3 rounded-lg border-2 text-center transition-all ${
                    planTier === key
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium capitalize">{key}</div>
                  <div className="text-sm text-gray-600">${price}/mo</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Calculate button */}
          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate My ROI
          </button>
        </div>
        
        {/* Results */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-lg p-8">
          {!showResults ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Enter your details to see your ROI</p>
              </div>
            </div>
          ) : results && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Your Results
              </h2>
              
              {/* Key metrics */}
              <div className="space-y-6 mb-8">
                {/* Net savings */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Annual Net Savings</span>
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-4xl font-bold text-green-600">
                    ${results.netSavings.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    ${results.monthlyCostSaved.toLocaleString()} saved/month
                    - ${PLAN_PRICING[planTier]}/month = ${results.netSavings/12|0}/month net
                  </p>
                </div>
                
                {/* ROI percentage */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Return on Investment</span>
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-4xl font-bold text-blue-600">
                    {results.roi.toFixed(0)}%
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {results.roi > 300 ? 'Exceptional' : results.roi > 200 ? 'Excellent' : 'Good'} ROI
                  </p>
                </div>
                
                {/* Time saved */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Time Saved Annually</span>
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-4xl font-bold text-purple-600">
                    {results.yearlyTimeSaved.toLocaleString()} hrs
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {(results.yearlyTimeSaved / 40 / 52).toFixed(1)} full-time equivalents
                  </p>
                </div>
                
                {/* Break-even */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Break-Even Time</span>
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-4xl font-bold text-orange-600">
                    {results.breakEvenWeeks.toFixed(1)} weeks
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Pays for itself in less than {Math.ceil(results.breakEvenWeeks / 4)} months
                  </p>
                </div>
              </div>
              
              {/* Additional details */}
              <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Detailed Breakdown</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tasks automated per week:</span>
                    <span className="font-medium">{results.tasksAutomated.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weekly time saved:</span>
                    <span className="font-medium">{results.weeklyTimeSaved.toFixed(1)} hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weekly cost saved:</span>
                    <span className="font-medium">${results.weeklyCostSaved.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-600">Platform cost (annual):</span>
                    <span className="font-medium">${results.platformCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Savings (annual):</span>
                    <span className="font-medium text-green-600">
                      ${results.yearlyCostSaved.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* CTA buttons */}
              <div className="space-y-3">
                <button
                  onClick={shareResults}
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center border-2 border-blue-600"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share My Results
                </button>
                
                <a
                  href="/signup"
                  className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Start Saving Today - 14 Day Free Trial
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
