/**
 * Created by manabu.osada on 2016/10/14.
 */

/* pin assign
 3.3v   	1	2	5v
 I2C SDA	3	4	--
 I2C SCL	5	6	Ground
 GPIO   	7	8	TX
 --	        9	10	RX
 GPIO	    11	12	GPIO
 GPIO	    13	14	--
 GPIO	    15	16	GPIO
 --	        17	18	GPIO
 SPI MOSI	19	20	--
 SPI MISO	21	22	GPIO
 SPI SCLK	23	24	SPI CE0
 --	        25	26	SPI CE1

 <Model A+ and Model B+ additional pins>
 ID_SD  	27	28	ID_SC
 GPIO   	29	30	--
 GPIO   	31	32	GPIO
 GPIO   	33	34	--
 GPIO   	35	36	GPIO
 GPIO   	37	38	GPIO
 --	        39	40	GPIO
 * */

'use strict';

let gpio = require("pi-gpio");
let targetPin = 40;

setInterval(function () {
    gpio.open(targetPin, "input pullup", (error) => {
            if (error) {
                console.log('Target pin already opened');
            }

            gpio.read(targetPin, (error, value) => {
                    if (error) {
                        console.log('error: ', error);
                    }
                    console.log("current state: ", value);

                    gpio.close(targetPin);
                }
            );
        }
    );
}, 500);
