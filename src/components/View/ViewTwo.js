import React from 'react';

//Material UI(Media)
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//Styled-Components
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
/*
flex: 1 does the following:
flex-grow : 1; // this means that the div will grow in same proportion as the window-size
flex-shrink : 1; // this means that the div will shrink in same proportion as the window-size
flex-basis : 0; // this means that the div does not have a starting value as such and will take up screen as per the screen size available for.e.g:- if 3 divs are in the wrapper then each div will take 33%.
*/

const Wrapper = styled.div`
    display: block;
    margin: auto;
    padding: 2em;
`;

const Background = styled.div`
    background: linear-gradient(to bottom, white, #e1e6e2);
`;

const useStyles = makeStyles({
    card: {
        maxHeight: 450,
        maxWidth: 350
    }
})

const ViewTwo = (props) => {
    const classes = useStyles();
    return (
        <Background>
            <Row>
                <Column>
                    <Wrapper>
                        {/* Card One */}
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Joy Divison"
                                    height="180"
                                    image="https://dangerousminds.net/content/uploads/images/made/content/uploads/images/JDUP_029384_465_441_int.jpg"
                                    title="Joy Division" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">Joy Division</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Designer Peter Saville's decision to go with pulsar radio waves is right up there with Martin Hannett's spellbinding production in making this album a goth classic. Disney's Mickey Mouse shirt parody four decades later only reaffirmed its legend.</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="dark">Share</Button>
                                <Button size="small" color="dark">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Wrapper>
                </Column>

                <Column>
                    <Wrapper>
                        {/* Card Two */}
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Dark Side of the Moon"
                                    height="180"
                                    image="https://miro.medium.com/proxy/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg"
                                    title="Dark Side of the Moon" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">Dark Side of the Moon</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">This simple art says so much. The light going through a prism and coming out as a rainbow was meant to convey the band's stage lighting and the album's lyrics. And, as evidenced by the number of t-shirts bearing this image today, the prism has become synonymous with Floyd itself.</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="dark">Share</Button>
                                <Button size="small" color="dark">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Wrapper>
                </Column>

                <Column>
                    <Wrapper>
                        {/* Card Three */}
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Abbey Road"
                                    height="180"
                                    image="https://www.udiscovermusic.com/wp-content/uploads/2017/08/Abbey-Road.jpg"
                                    title="Abbey Road" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">Abbey Road</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Does any other album cover on this list stop traffic? It's a testament to the lasting impression of this street-crossing photo that hundreds of fans re-create it every day outside Abbey Road Studios. There's even a webcam live feed of the attraction.</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="dark">Share</Button>
                                <Button size="small" color="dark">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Wrapper>
                </Column>
            </Row>
        </Background>
    )
}
export default ViewTwo;