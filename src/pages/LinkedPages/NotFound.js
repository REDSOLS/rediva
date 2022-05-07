import { Home } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Buttons from '../../components/forms/Button';

const NotFound = () => {

    const history = useHistory();

    const styles = UseStyles();
    return (
        <div className={styles.bg} >
            <div className={styles.td} >
                <marquee direction="right" behaviour="slide" width="100%"  >Page Not Found - 404&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Page Not Found - 404&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Page Not Found - 404 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Page Not Found - 404 </marquee>

                <div className={styles.line} />
                <div style={{ width: "100%", display: 'flex', justifyContent: 'center', padding: 100 }} >

                    <Buttons style={{ width: "20%", background: 'transparent', borderColor: 'white' }} onClick={() => history.push('/')}  >
                        <Home fontSize='large' />
                    </Buttons>
                </div>

                <div className={styles.line} />

            </div>
        </div>
    )
}

export default NotFound

const UseStyles = makeStyles(() => ({
    bg: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        background: '#911910'
    },
    td: {
        fontSize: 50,
        alignContent: 'center',
        padding: 100,
        color: 'lightgray',
        fontWeight: 'lighter',


    },
    line: {
        background: 'black',
        width: '100%',
        height: 2,
        margin: 5
    }

}))