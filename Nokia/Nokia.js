const prompt = require('prompt-sync')();
class Nokia{
    menu(){
        const display = "1-> Phone book\n2-> Messages\n3-> Chat\n4-> Call Logs\n5-> Tones\n6-> Settings\n7-> Call divert\n8-> Games\n9-> Calculator\n10-> Reminders\n11-> Clock\n12-> Profiles\n13-> SIM services";
        console.log(display);

        const input = prompt('Enter your choice from 1 - 13 or 0 to exit: '); 
            switch(input){
                case '0':
                    process.exit(0)
                    break;
                case '1':
                    this.phoneBook();
                    break;
                case '2':
                    this.messages();
                    break;
                case '3':
                    console.log("Chat");
                    break;
                case '4':
                    this.callRegister();
                    break;
                case '5':
                    this.tones();
                    break;
                case '6':
                    this.settings()
                    break;
                case '7':
                    console.log("Call divert\n")
                    break;
                case '8':
                    console.log("Games\n")
                    break;
                case '9':
                    console.log("Calculator\n")
                    break;
                case '10':
                    console.log("Reminders\n")
                    break;
                case '11':
                    this.clock();
                    break;
                case '12':
                    console.log("Profiles")
                    break;
                case '13':
                    console.log("SIM services")
                    break
                default:
                    this.menu();
            }
        this.menu()
        };

    clock(){
        let clockDisplay = "\n 1-> Alarm clock \n 2-> Clock setting \n 3-> Date settings \n 4-> Stop watch\n5-> Count down timer\n 6-> Auto update of date and time";
        console.log(clockDisplay)
        let clockPrompt = ("Choose an option from 1 - 6: ")
        switch(clockPrompt) {
			case '1':
			    console.log("Alarm\n");
			    break;
			case '2':
			    console.log("Clock setting\n");
			    break;
			 case '3':
			    console.log("Date settings\n");
			    break;
			 case '4':
			    console.log("Stop watch \n");
			    break;
			 case '5':
			    console.log("Count down timer\n");
			    break;
 			case '6':
			    console.log("Auto update of date and time \n");
			    break;
			 default:
			 	this.menu();
		     }
        this.menu()
    }
    
    settings(){
        let settingDisplay = "\n1-> Call settings\n2-> Phone settings\n3-> Security settings\n4-> Restore factory settings\n"
        console.log(settingDisplay)
        let settingPrompt = prompt("Enter an option from 1 - 4: ")
        switch(settingPrompt){
            case '1':
                this.callSettings()
                break;
            case '2':
                this.phoneSettings()
                break;
            case '3':
                this.securitySettings()
                break;
            case '4':
                console.log("Restore factory settings")
                break;
            default:
                this.menu()
                break;
        }
        this.menu()
    }

    callSettings(){
        let callDisplay = "\n1-> Automatic redial\n2-> Speed dialling\n3-> Call waiting options\n4-> Own number sending\n5-> Phone line in use\n6-> Automatic answer\n"
        console.log(callDisplay)
        let callPrompt = prompt("Pick an option from 1 - 6: ")
        switch(callPrompt){
            case '1':
                console.log("Automatic redial\n")
                break;
            case '2':
                console.log("Speed dialling\n")
                break;
            case '3':
                console.log("Call waiting options\n")
                break;
            case '4':
                console.log("Own number sending\n")
                break;
            case '5':
                console.log("Phone line in use\n")
                break;
            case '6':
                console.log("Automatic answer\n")
                break;
            default:
                this.callSettings();
                break;
        }
        this.menu()
    }

    phoneSettings(){
        let phoneDisplay = "\n1-> Language\n2-> Cell info display\n3-> Welcome note\n4-> Network selection\n5-> Lights\n6-> Confirm SIM service actions\n"
        console.log(phoneDisplay)
        let phonePrompt = prompt("Pick an option from 1 - 6: ")
        switch(phonePrompt){
            case '1':
                console.log("Languaget\n")
                break;
            case '2':
                console.log("Cell info display\n")
                break;
            case '3':
                console.log("Welcome note\n")
                break;
            case '4':
                console.log("Network selection\n")
                break;
            case '5':
                console.log("Lights\n")
                break;
            case '6':
                console.log("Confirm SIM services")
                break;
            default:
                this.phoneSettings();
                break;
        }
        this.menu()
    }

    securitySettings(){
        let securityDisplay = "\n1-> Pin code request\n2-> Call barring service\n3-> Fixed dialling\n4-> Closed user group\n5-> Phone security\n6-> Change access codes\n"
        console.log(securityDisplay)
        let securityPrompt = prompt("Pick an option from 1 - 6: ")
        switch(securityPrompt){
            case '1':
                console.log("Pin code request\n")
                break;
            case '2':
                console.log("Call barring service\n")
                break;
            case '3':
                console.log("Fixed dialling\n")
                break;
            case '4':
                console.log("Closed user group\n")
                break;
            case '5':
                console.log("Phone security\n")
                break;
            case '6':
                console.log("Change access codes")
                break;
            default:
                this.securitySettings();
                break;
        }
        this.menu()
    }

    tones(){
        let toneDisplay = "1-> Ringing tone\n2-> Ringing volume\n3-> Incoming call alert\n4-> Composer\n5-> Message alert tone\n6-> Keypad tones\n7-> Warning and game tones\n8-> Vibrating alert\n9-> Screen saver\n"
        console.log(toneDisplay)
        let tonePrompt = prompt("Enter an option from 1 - 9: ")
        switch(tonePrompt){
            case '1':
                console.log("Ringing tone\n")
                break;
            case '2':
                console.log("Ringing volume\n")
                break;
            case '3':
                console.log("Incoming call alert\n")
                break;
            case '4':
                console.log("Composer\n")
                break;
            case '5':
                console.log("Message alerrt tone")
                break;
            case '6':
                console.log("Keypad tones")
                break;
            case '7':
                console.log("Warning and game tones");
                break;
            case '8':
                console.log("Screen saver")
            default:
                this.tones();
                break;
        }
        this.menu()
    }
    
    callRegister(){
        let registerDisplay = "1-> Missed calls\n2-> Received calls\n3-> Dialled numbers\n4-> Erase recent call lists\n5-> Show call duration\n6-> Show call costs\n7-> Call cost settings\n8-> Prepaid credit\n"
        console.log(registerDisplay)
        let registerInput = prompt("Enter your choice from 1 - 8: ")
        switch(registerInput){
            case '1':
                console.log("Missed calls\n")
                break;
            case '2':
                console.log("Received calls\n")
                break;
            case '3':
                console.log("Dialled numbers\n")
                break;
            case '4':
                console.log("Erase recent call lists\n")
                break;
            case '5':
                this.showCallDuration();
                break;
            case '6':
                this.showCallCosts()
                break;
            case '7':
                this.callCostSettings();
                break;
            case '8':
                console.log("Prepaid credit")
            default:
                this.callRegister();
                break;
        }
    }

    callCostSettings(){
        let costDisplay = "1-> Call cost limit\n2-> Show costs in"
        console.log(costDisplay)
        let costPrompt = prompt("Enter 1 or 2 to select: ")
        switch(costPrompt){
            case '1':
                console.log("Call cost limit\n")
                break;
            case '2':
                console.log("Show costs in")
                break;
            default:
                this.callRegister()

        }
    }

    showCallCosts(){
        let callCostDisplay = "1-> Last call cost\n2-> All calls' cost\n3-> Clear counters\n"
        console.log(callCostDisplay)
        let callCostPrompt = prompt("Enter an option from 1 - 3")
        switch(callCostPrompt){
            case '1':
                console.log("Last call cost\n")
                break;
            case '2':
                console.log("All calls' cost\n")
                break;
            case '3':
                console.log("Clear counters\n")
                break;
        }
    }

    showCallDuration(){
        let durationDisplay = "1-> Last call duration\n2-> All calls' duration\n3-> Received calls' duration\n4-> Dialled calls' duration\n5-> Clear timers\n"
        console.log(durationDisplay)
        let durationPrompt = prompt("Enter an option from 1 - 5: ")
        switch(durationPrompt){
            case '1':
                console.log("Last call duration\n")
                break;
            case '2':
                console.log("All calls' duration\n")
                break;
            case '3':
                console.log("Received calls' duration\n")
                break;
            case '4':
                console.log("Dialled calls' duration\n")
                break;
            case '5':
                console.log("Clear timers\n")
                break;
            default:
                this.callRegister();
                break;
        }
    }

    phoneBook(){

        const displayMenu = "1-> Search\n2-> Service Nos\n3-> AddName\n4-> Erase\n5-> Edit\n6-> Assign Tone\n7-> Send b'card\n8-> Options\n9-> Speed dials\n10-> Service command editor\n\n"
        console.log(displayMenu)
        const decision = prompt("Enter an option from 1 - 10: ")
        switch(decision){
            case '1':
                console.log("Search\n")
                break;
            case '2':
                console.log("Service Nos\n")
                break;
            case '3':
                console.log("Add name\n")
                break;
            case '4':
                console.log("Erase\n")
                break;
            case '5':
                console.log("Edit\n")
                break;
            case '6':
                console.log("Assign tone\n")
                break;
            case '7':
                console.log("Send b'card\n")
                break;
            case '8':
                let option = "1-> Type of view\n2-> Memory status";
                console.log(option)
                let selectOption = prompt("Enter an option from 1 - 2: ");
                switch (selectOption){
                    case '1':
                        console.log("Type of view\n")
                        break;
                    case '2':
                        console.log("Memory status\n")
                        break;
                    default:
                        this.phoneBook();
                        break;
                }
            case '9':
                console.log("Speed dials")
                break;
            case '10':
                console.log("Voice tags")
            
        }
        this.menu();
    }
    

    messages(){
        let menu = "1-> Write messages\n2-> Inbox\n3-> Outbox\n4-> Picture messages\n5-> Templates\n6-> Smileys\n7-> Message settings\n8-> Info service\n9-> Voice mailbox number\n10-> Service command editor\n"
        console.log(menu)
        const decision = prompt("Enter an option from 1-10: ")
        switch(decision){
            case '1':
                console.log("Write messages\n")
                break;
            case '2':
                console.log("Inbox\n")
                break;
            case '3':
                console.log("Outbox\n")
                break;
            case '4':
                console.log("Picture messages\n")
                break;
            case '5':
                console.log("Temperature\n")
                break;
            case '6':
                console.log("Smileys\n")
                break;
            case '7':
                this.messageSettings();
                break;
            case '8':
                let option = "1-> Type of view\n2-> Memory status";
                console.log(option)
                let selectOption = prompt("Enter an option from 1 - 2: ");
                switch (selectOption){
                    case '1':
                        console.log("Type of view\n")
                        break;
                    case '2':
                        console.log("Memory status\n")
                        break;
                    default:
                        this.messages();
                        break;
                }
            case '9':
                console.log("Speed dials")
                break;
            case '10':
                console.log("Voice tags")
            
        }
        this.menu();
    
    }
    messageSettings(){
        let settingsDisplay = "1-> Set\n2-> Common"
        console.log(settingsDisplay)
        let settingsInput = prompt("Enter your choice from 1 - 2: ")
        switch(settingsInput){
            case '1': 
                this.set();
                break;
            case '2':
                this.common();
                break;
            default:
                this.messageSettings();
                
        }
    }
    set(){
        let setDisplay = "1-> Message centre number\n2-> Message sent as\n3-> Message validity\n"
        console.log(setDisplay)
        let setPrompt = prompt("Enter your choice from 1 - 3: ")
        switch(setPrompt){
            case '1':
                console.log("Message centre number\n")
            case '2':
                console.log("Message sent as\n")
            case '3':
                console.log("Message validity\n")
            }

    }
    common(){
        let commonDisplay = "1-> Delivery reports\n2-> Reply via same centre\n3-> Character support\n"
        console.log(commonDisplay)
        let commonPrompt = prompt("Enter your choice from 1 - 3: ")
        switch(commonPrompt){
            case '1':
                console.log("Delivery reports\n")
            case '2':
                console.log("Reply via same centre\n")
            case '3':
                console.log("Character support\n")
        }
    }

}

const nokia = new Nokia()
nokia.menu()