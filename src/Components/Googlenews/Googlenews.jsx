import React from 'react';
import styles from './Googlenews.module.css'
import { Grid } from '@material-ui/core';
import cx from 'classnames';

//following imports for card
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//imports for cards ends


const MediaCard=(imageurl,title,description,linktoarticle)=>{
  
    return (
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.cssclass )}>
      <Card className={styles.root}>
        <CardActionArea>
          <CardMedia
            className={styles.media}
            image={imageurl}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h4">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Button size="small" color="primary" href={linktoarticle}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
    );
  }




const scrolldiv = (data)=> {
    // {console.log(data)}
  const returnable = (
    <div >
        <Grid  container spacing={2} justify="center" className={styles.container}>
          
            { data.newsArraypassed.a.map((news)=>{return MediaCard(news.imagelink, news.title, news.description, news.linktoarticle)}) }

        </Grid>
   
        
   </div>            );

    return returnable;

}


const Googlenews = (props)=> {


        if(!props.newsArraypassed.a) return 'News loading....';
        
      //  console.log(newsArray);

        const returnable = (

            <div className = {styles.container}>  {scrolldiv(props)}  </div>
        )

        return returnable;

}
export default Googlenews;