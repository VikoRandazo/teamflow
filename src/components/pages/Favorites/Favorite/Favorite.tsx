import React, { FC } from "react";
import styles from "./Favorite.module.scss";
import Applicant from "../../../jobMarket/Applicant/Applicant";
import { useSelector } from "react-redux";
import { StoreRootTypes } from "../../../../store";

interface FavoriteProps {

}

const Favorite: FC<FavoriteProps> = () => {
  const favorite:any = useSelector((state: StoreRootTypes) => state.favorites.favorite);
  console.log(favorite);
  
  return (
    <div className={styles.Favorite}>
      {favorite ? (
        <Applicant
          id={favorite?.id}
          name={favorite.name}
          contactInformation={{
            address: {
              city: favorite.contactInformation.address.city,
            },
          }}
          positionAppliedFor={favorite.positionAppliedFor}
          resumeCV={favorite.resumeCV}
        />
      ) : null}
    </div>
  );
};

export default Favorite;
