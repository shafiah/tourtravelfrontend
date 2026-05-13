import React, { useState } from 'react';

const ItinerarySection = ({ itinerary }) => {
  const [expandedDay, setExpandedDay] = useState(0);

  return (
    <div className="tab-content">
      <div className="itinerary-wrapper">
        <h3>Day Wise Itinerary</h3>
        <div className="itinerary-timeline">
          {itinerary.map((dayPlan, idx) => (
            <div key={idx} className="itinerary-item">
              <div
                className={`day-header ${expandedDay === idx ? 'active' : ''}`}
                onClick={() => setExpandedDay(expandedDay === idx ? -1 : idx)}
              >
                <div className="day-number">Day {dayPlan.day}</div>
                <div className="day-title">{dayPlan.title}</div>
                <div className="expand-icon">{expandedDay === idx ? '−' : '+'}</div>
              </div>

              {expandedDay === idx && (
                <div className="day-activities">
                  <ul>
                    {dayPlan.activities.map((activity, actIdx) => (
                      <li key={actIdx}>
                        <span className="activity-dot">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItinerarySection;
