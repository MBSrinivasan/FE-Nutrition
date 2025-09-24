export const API_URL = "https://test.platosoftware.com/api";

// export const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
export const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJpZFwiOlwiZGNjNTA3NDAtYTZmZC00Y2I3LWEwMzctNDVkMzFhMGNhNWQyXCIsXCJ1c2VyTmFtZVwiOlwidGFtaXpoXCIsXCJmaXJzdE5hbWVcIjpcIlRhbWl6aGFyYXNhblwiLFwibGFzdE5hbWVcIjpcIlwiLFwiZW1haWxcIjpcInRhbWl6aFwiLFwidGVuYW50SWRcIjpcIjFkMGRiNmNlLTkzOTQtNGEzZS1hOGQ5LTQxNGYxOTg3ZTVkNVwiLFwicm9sZVwiOlwicGxhbi1vd25lclwifSIsImV4cCI6MTc1NzUwNTU5NCwiaWF0IjoxNzU3NDE5MTk0fQ.Zcvzn9XMSGV6S0SPyuHBZBB39pgYOGHbR70zGrlXLO0";

export const renderLabel = (label, required)  => (
    <div className="flex justify-between w-full marginb-5]">
      <span className="text-[13px] font-semibold text-[#374151]">{label}</span>
      {required && <span style={{color:"red"}}>*</span>}
    </div>
  );