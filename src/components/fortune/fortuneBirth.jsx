import React from "react";

const FortuneBirth = ({ onYearChange, onMonthChange, onDayChange }) => {
  // 연도, 월, 일 데이터 생성
  const years = Array.from({ length: 2025 - 1980 + 1 }, (_, i) => 1980 + i); // 1980 ~ 2025
  const months = Array.from({ length: 12 }, (_, i) => i + 1); // 1 ~ 12
  const days = Array.from({ length: 31 }, (_, i) => i + 1); // 1 ~ 31

  return (
    <form className="flex flex-col mt-3">
      <label className="text-lg font-bold text-gray-700">생년월일</label>
      <div className="birth-date flex gap-4">
        {/* 연도 선택 */}
        <select
          name="year"
          required
          className="flex-1 border p-2 rounded"
          onChange={(e) => onYearChange(e.target.value)} // 선택된 연도를 부모로 전달
        >
          <option value="">년</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* 월 선택 */}
        <select
          name="month"
          required
          className="flex-1 border p-2 rounded"
          onChange={(e) => onMonthChange(e.target.value)} // 선택된 월을 부모로 전달
        >
          <option value="">월</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}월
            </option>
          ))}
        </select>

        {/* 일 선택 */}
        <select
          name="day"
          required
          className="flex-1 border p-2 rounded"
          onChange={(e) => onDayChange(e.target.value)} // 선택된 일을 부모로 전달
        >
          <option value="">일</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}일
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default FortuneBirth;