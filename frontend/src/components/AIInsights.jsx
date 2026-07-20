import { useEffect, useState } from "react";
import axios from "axios";
import { FaRobot, FaLightbulb, FaArrowTrendUp } from "react-icons/fa6";

function AIInsights() {
  const [insight, setInsight] = useState("");

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/ai`);
      setInsight(res.data.insight);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ai-section">

      <h2 className="section-title">
        🤖 AI Business Assistant
      </h2>

      <div className="ai-card">

        <div className="ai-header">

          <div className="ai-icon">
            <FaRobot />
          </div>

          <div>

            <h3>ShopSense AI</h3>

            <span className="badge">
              High Priority
            </span>

          </div>

        </div>

        <div className="ai-content">

          <div className="info-box">

            <FaArrowTrendUp className="info-icon"/>

            <div>

              <h4>Business Analysis</h4>

              <p>{insight}</p>

            </div>

          </div>

          <div className="info-box">

            <FaLightbulb className="info-icon"/>

            <div>

              <h4>Recommended Action</h4>

              <p>
                Increase stock for best-selling products,
                launch promotions for slow-moving inventory,
                and focus marketing on the highest-performing
                category.
              </p>

            </div>

          </div>

        </div>

       <button className="ai-btn" onClick={fetchInsights}>
  Generate New Insights
</button>

      </div>

    </div>
  );
}

export default AIInsights;