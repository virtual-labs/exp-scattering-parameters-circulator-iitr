### Introduction
<div style="text-align:justify">

A circulator is a device that transports radio frequency or microwave signals from one port to another. They typically have three ports. They are made of magnets and ferrite materials with magnetic properties. Circulators can be made to circulate clockwise or counterclockwise. So the name "circulator" makes sense in that it transmits the signal around to the three ports. These devices are also referred to as duplexers because they allow the transmission of two signals over one channel. This allows a receiver and a transmitter to share the same antenna. This is the most common use for a circulator. When the transmitter sends a signal, the device directs the signal to the antenna port. So in summary, a circulator is a device that is designed to direct radio frequencies or microwave signals from Port 1 to Port 2 with a minimum loss. Following is the basic parameters of circulator for study.  
<center>

![](images/circulator.png)

**Fig. 1 Circulator**</center>

1.  The coupling factor is defined as:  

<center>

<math style='font-size:20px'>
<mrow>
   <mi>Coupling (dB)</mi>  
                <mo>=</mo>
               <mi>20</mi>
                <msub subscriptshift="5px">
                        <mi>log</mi>
                        <mn>10</mn>
                    </msub>
                <mfrac>
                        <mi>V1</mi>
                        <mi>V3</mi>
                </mfrac>
            </mrow>
    </math>
        --------------------(1)
</center>
<br>
 
2.  It is the ratio of power fed to input arm to the input power detected at not coupled port with other port terminated in the matched load.  
    Hence
   <center>
 <math style='font-size:20px'>
            <mrow>
                    <mi>Isolation (dB)</mi>  
                <mo>=</mo>
               <mi>20</mi>
                <msub subscriptshift="5px">
                        <mi>log</mi>
                        <mn>10</mn>
                    </msub>
                <mfrac>
                        <mi>V1</mi>
                        <mi>V3</mi>
                </mfrac>
            </mrow>
    </math>
    --------------------(2)
</center>

### Component List

1. **Microwave Supply**  
Provides the necessary microwave power to the circulator, enabling the operation and measurement of the signals at different ports.

2. **Isolator**  
Prevents reflected signals from returning to the microwave source, protecting it from potential damage and ensuring stable operation by allowing unidirectional signal flow.

3. **Frequency Meter**  
Measures the frequency of the microwave signals being transmitted through the circulator, ensuring accurate characterization and tuning during tests.

4. **Variable Attenuator**  
Allows for precise control of the signal power entering the circulator, enabling adjustments to analyze the effects of varying input power on isolation and coupling.

5. **Slotted Line**  
A measurement tool used to visualize standing wave patterns and measure voltage standing wave ratio (VSWR) along the transmission line, aiding in the assessment of signal behavior.

6. **Detector Mount**  
Holds the detector that measures the output signal power from the circulator, providing data necessary for calculating the isolation and coupling factors.

7. **Cathode Ray Oscilloscope (CRO)**  
Visualizes the output signal waveforms, allowing for analysis of amplitude, frequency, and phase relationships, which is crucial for evaluating the performance of the circulator.

8. **3-Port Circulator**  
A non-reciprocal microwave device that routes signals from one port to another while preventing backflow. It is essential for measuring isolation (how much signal is prevented from going back to the input) and coupling factor (how much power is transferred to the other ports).

9. **Matched Terminal**  
Absorbs excess microwave power at one of the ports, preventing reflections and ensuring that the measurements of isolation and coupling factors are accurate by maintaining proper impedance matching.




### Block Diagram

*   ### **For V1 Voltage:**
    <center>

    ![](images/block1.png)
    
    **Fig. 2 Bench setup for V1 Voltage**
    </center>
    
*   ### **For V2 Voltage:**
    <center>
    
    ![](images/block2.png)
    
    **Fig. 3 Bench setup for V2 Voltage**
    </center>
    
*   ### **For V3 Voltage:**
    <center>

    ![](images/block3.png)
    
    **Fig. 4 Bench setup for V3 Voltage**
    </center>

</div>