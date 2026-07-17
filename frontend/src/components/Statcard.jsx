function Statcard({ title, value, bgClass, icon }) {
  return (
    <div className={`stat-card ${bgClass}`}>
      <div>
        <h3>{title}</h3>
        <h2>{value}</h2>
      </div>

      <div className="stat-icon">
        {icon}
      </div>
    </div>
  );
}

export default Statcard;