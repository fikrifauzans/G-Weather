export const generateMeteors = (count: number) => {
    const meteors = [];
    for (let i = 0; i < count; i++) {
      const delay = Math.random() * 2;
      const duration = 1.5 + Math.random() * 2;
      const left = Math.random() * 100;
      meteors.push(
        <div
          key={i}
          className="meteor absolute"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }
    return meteors;
  };