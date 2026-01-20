import React from 'react';
import PropTypes from 'prop-types';
import BranchCard from '../molecules/BranchCard';

export default function BranchesCard({ branches }) {
  const reg = /(<([^>]+)>)/gi;

  return (
    <div className="row mb-5 d-flex flex-wrap justify-content-center g-40">
      {branches.map((card) => {
        return (
          <BranchCard
            key={card.name}
            permalink={card.permalink}
            image={card.image}
            name={card.name}
            dir={card.dir.replace(reg, '')}
            tel={card.tel}
            schedule={card.schedule}
            nameButton={card.nameButton}
          />
        );
      })}
    </div>
  );
}

BranchesCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

BranchesCard.defaultProps = {
  products: [],
};
