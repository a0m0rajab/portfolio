import React, { Component } from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react/dist/index';
import Grid from '@material-ui/core/Grid';

export default class SocialMediaRow extends Component {
    render() {
        const mystyle = {
            padding: "0.3rem",
        };
        return (

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <div style={mystyle} >
                    <SocialMediaIconsReact borderColor="rgba(245,240,240,1)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="#61dafb" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="50%" url="https://twitter.com/rajab_2" size="50" />
                </div>
                <div style={mystyle} >
                    <SocialMediaIconsReact style={mystyle} borderColor="rgba(245,240,240,1)" borderWidth="5" borderStyle="solid" icon="github" iconColor="#61dafb" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="50%" url="https://github.com/a0m0rajab" size="50" />
                </div >
                <div style={mystyle} >
                    <SocialMediaIconsReact borderColor="rgba(245,240,240,1)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="#61dafb" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="50%" url="https://linkedin.com/in/a0m0rajab" size="50" />
                </div>
                <div style={mystyle} >
                    <SocialMediaIconsReact borderColor="rgba(245,240,240,1)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="#61dafb" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="50%" url="https://fb.com/a0m0rajab" size="50" />
                </div>
            </Grid>
        )
    }
}