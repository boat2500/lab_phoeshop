import React, { Component } from 'react';
import Image from './Image';
import 'bulma/css/bulma.css';
import Columns from './Columns';

class MyApp extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <Columns class="columns">
                        <Columns class="column">
                            <Image src={require('./img/VivoV11.jpeg')} alt="Vivo V11" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/iphoneX.png')} alt="Iphone X" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/huaweinova3i.png')} alt="huaweinova3i" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/oppo3s.png')} alt="oppo 3s" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/oppoF9.png')} alt="oppoF9" />
                        </Columns>
                    </Columns>
                </section>
            </div>

        );
    }
};

export default MyApp;
