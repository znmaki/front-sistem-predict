import { useState } from "react";
import { Collapse, List, ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ButtomHeader } from "..";

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
                        <ButtomHeader text='Inicio' />
                    </Link>
                </ListItem>
                <ListItemButton onClick={handleClick}>
                    <ButtomHeader text='Productos'>
                        {open ? <p className="ml-auto">Menos</p> : <p className="ml-auto">Mas</p>}
                    </ButtomHeader>
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List>
                        <Link to='/registrar-producto' className="w-full">
                            <ListItem>
                                <ButtomHeader text='Nuevo producto' />
                            </ListItem>
                        </Link>
                        <Link to='/productos-recibidos' className="w-full">
                            <ListItem>
                                <ButtomHeader text='Nuevo producto recibido' />
                            </ListItem>
                        </Link>
                        <Link to='/productos-vendidos' className="w-full">
                            <ListItem>
                                <ButtomHeader text='Productos vendidos' />
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
                <ListItemButton>
                    <Link to='/tablero-productos/1' className="w-full">
                        <ButtomHeader text='Panel de Productos' />
                    </Link>
                </ListItemButton>
                {/* Agrega más elementos de navegación según sea necesario */}
            </List>
        </div>
    );
};


export default Navbar