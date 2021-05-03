import { useRouter } from "blitz";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as React from "react";

export const MainListItems = () => {
  const router = useRouter();

  return (
    <div>
      <ListItem button onClick={() => router.push("/top")}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="アイテムリスト" />
      </ListItem>
      <ListItem button onClick={() => router.push("/favorite")}>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="お気に入り" />
      </ListItem>
    </div>
  );
};
