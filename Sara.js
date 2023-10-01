// {Name: The AI Dude}
// {Description: Learn how to create a dialog script and integrate your AI assistant with the app}

// Use this sample to create your own voice commands

let sarahVoice = voice(en, 'female', 0, 5, 1.2);

intent(`Who are you?`, `What is your name?`, p => { 
       p.play(sarahVoice, `I'm Sarah, your virtual voice assistant`, opts({deactivate: true}));
})

const greedyCapture = '.+';


intent(`Add $(TASK* ${greedyCapture}) to my to do list`, p => {
       
        p.play(
            opts({force: true}), 
            {command: 'addItem', item: p.TASK.value}, );
        p.play(`Added ${p.TASK.value} to your to-do list`)
   

});

intent(`I want to submit a complaint. $(COMPLAINT* ${greedyCapture})`, p => {
    p.play(`Your complaint has been registered. You've said: ${p.COMPLAINT.value}`);
});

intent(`add to Stream of Conciousness $(CONCIOUSNESS* ${greedyCapture})`, p => {
            p.play(
            opts({force: true, activate:true}), 
            {command: 'addConciousness', item: p.CONCIOUSNESS.value}, );
    
        p.play(`Added ${p.CONCIOUSNESS.value} to your screen`)
   

    p.play(`Your Conciousness has been registered. You've said: ${p.CONCIOUSNESS.value}`);
});



// Give Alan some knowledge about the world
corpus(`
    Hello, I'm Alan.
    This is a demo application.
    You can learn how to teach Alan useful skills.
    I can teach you how to write Alan Scripts.
    I can help you. I can do a lot of things. I can answer questions. I can do tasks.
    But they should be relevant to this application.
    I can help with this application.
    I'm Alan. I'm a virtual assistant. I'm here to help you with applications.
    This is a demo script. It shows how to use Alan.
    You can create dialogs and teach me.
    For example: I can help navigate this application.
`);
