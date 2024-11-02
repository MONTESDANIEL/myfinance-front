function GoalTypeSection({ type, goals, toggleLegend, showLegend }) {
    const isMetaUnica = type === 'Fijo';
    const title = getGoalTitle(type);
    const description = getGoalDescription(type);

    return (
        <div className="col-lg-12 p-3 m-2 card">
            <div className="position-relative">
                <h4 className="text-center">{title}</h4>
                <p className="text-center">{description}</p>

                {!isMetaUnica && <InfoButton onClick={() => toggleLegend(type)} show={showLegend[type]} />}

                {showLegend[type] && <Legend isMetaUnica={isMetaUnica} />}
            </div>
            <hr />
            <GoalList goals={goals} isMetaUnica={isMetaUnica} />
        </div>
    );
}
