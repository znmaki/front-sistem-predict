import { useState } from "react";
import { Collapse, List, ListItem, ListItemButton } from "@mui/material";
import { ButtomHeader } from "../Buttom";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className=" pt-16">
            <List>
                <ListItem>
                    <Link to='/inicio' className="w-full">
                        <ButtomHeader text='Inicio' router='inicio' />
                    </Link>
                </ListItem>
                <ListItemButton onClick={handleClick}>
                    <ButtomHeader text='Productos'>
                        {open ? <p className="ml-auto">Menos</p> : <p className="ml-auto">Mas</p>}
                    </ButtomHeader>
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List>
                        <Link to='/registro-productos' className="w-full">
                            <ListItem>
                                <ButtomHeader text='Nuevos productos' />
                            </ListItem>
                        </Link>
                        <Link to='/registro-ventas' className="w-full">
                            <ListItem>
                                <ButtomHeader text='Productos vendidos' />
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
                <ListItemButton>
                    <Link to='/panel-productos' className="w-full">
                        <ButtomHeader text='Panel de Productos' />
                    </Link>
                </ListItemButton>
                {/* Agrega más elementos de navegación según sea necesario */}
            </List>
        </div>
    );
};


export default Navbar