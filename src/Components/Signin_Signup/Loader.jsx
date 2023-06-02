import React from 'react';
import styles from "./loader.module.css"
import { Button } from '@chakra-ui/react';

function Loader(props) {
    return (
        <Button px={"40px"} colorScheme='orange'>
            <span className={styles.loader}></span>
        </Button>
    );
}

export default Loader;