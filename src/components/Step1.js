import React from 'react'

class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
      
        state = {
            step: 1,
            name: '',
        },

            // go back to previous step
            prevStep = () => {
                const { step } = this.state;
                this.setState({ step: step - 1 });
            };

        // proceed to the next step
        nextStep = () => {
            const { step } = this.state;
            this.setState({ step: step + 1 });
        };

        // Handle fields change
        handleChange = input => e => {
            this.setState({ [input]: e.target.value });
        };

        render() 
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.name} onChange={this.handleChange('name')} />
                    </label>
                </form>
            );
        
    
        // const { step } = this.state;
        // const { name } = this.state;
        // const values { name } = this.state

        
        switch (step) {
            case 1:
                return (
                    <Gender
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <PersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirmation
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Success />
                )
            default:
            // do nothing
        }
    }
        
        
}

export default Step1;

