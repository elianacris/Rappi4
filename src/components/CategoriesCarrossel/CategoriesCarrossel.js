import React from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CategoriesContainer } from './styled';


export default function CategoriesCarrossel(props) {

    const [value, setValue] = React.useState(0);
    const { handleCategory} = props
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (

        <CategoriesContainer sx={{ maxWidth: 350 }}>
            <Tabs
                onChange={handleChange}
                value={value}
                variant='scrollable'
                scrollButtons={false}

                indicatorColor="transparent" 
            >
                <Tab style={{ textTransform: 'none', fontSize: 16 }} onClick={() => handleCategory('')} label="Todos" />

                <Tab style={{ textTransform: 'none', fontSize: 16 }} onClick={() => handleCategory("Árabe")} label="Árabe" />
                <Tab style={{ textTransform: 'none', fontSize: 16 }} onClick={() => handleCategory("Asiática")} label="Asiática" />
                <Tab style={{ textTransform: 'none', fontSize: 16 }} onClick={() => handleCategory("Hamburguer")} label="Hamburguer" />    
                <Tab style={{ textTransform: 'none', fontSize: 16 }} onClick={() => handleCategory("Italiana")} label="Italiana" />
                <Tab style={{ textTransform: 'none', fontSize: 16 }} onClick={() => handleCategory("Sorvetes")} label="Sorvetes" />
                <Tab style={{ textTransform: 'none', fontSize: 16 }} onClick={() => handleCategory("Carnes")} label="Carnes" />
                <Tab style={{ textTransform: 'none', fontSize: 16 }} onClick={() => handleCategory("Baiana")} label="Baiana" />
                <Tab style={{ textTransform: 'none', fontSize: 16 }} onClick={() => handleCategory("Petiscos")} label="Petiscos" />
                <Tab style={{ textTransform: 'none', fontSize: 16 }} onClick={() => handleCategory("Mexicana")} label="Mexicana" />
            </Tabs>
        </CategoriesContainer>
    );
}