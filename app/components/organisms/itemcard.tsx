import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useMutation } from "blitz";
import updateItem from "../../item/mutations/updateItem";

type ItemCardProps = {
  id: number;
  name: string | null;
  title: string | null;
  date?: string;
  img?: string;
  favorite: boolean | null;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 200,
      margin: theme.spacing(2, 2, 0, 0),
    },
    media: {
      height: 50,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const ItemCard = (props: ItemCardProps): JSX.Element => {
  const { favorite, date, id } = props;
  const name = props.name || "default name";
  const title = props.title || "default title";
  const img = props.img || "/flower-park.jpeg";

  const classes = useStyles();
  const [itemFavorite, setItemFavorite] = useState(favorite);
  const [updateItemMutation] = useMutation(updateItem);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            A
          </Avatar>
        }
        action={
          <IconButton
            aria-label="add to favorites"
            onClick={async () => {
              const favorite = !itemFavorite;
              setItemFavorite(favorite);
              try {
                await updateItemMutation({
                  id,
                  favorite,
                });
              } catch (e) {}
            }}
          >
            {itemFavorite ? (
              <FavoriteIcon color={"secondary"} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia className={classes.media} image={img} title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
