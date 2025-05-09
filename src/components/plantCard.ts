

class plantCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {

        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
        
            <head>
           
                <style>
            
                    .card{

                        height: 380px;
                        width: 300px;
                        background-color: white;
                        border: solid 1px gray;
                        border-radius: 10px;
                    
                    
                    }

                    img{
                    
                        max-width: 300px;
                        height: auto;
                        border-top-left-radius: 10px ;
                        border-top-right-radius: 10px;
                    
                    }

                    .txt{
                    
                        padding-left: 15px;
                    
                    }

                    
                
                </style>
            
            </head>
                     

            <body>
            
                <div class="card">
    
                    <img src="https://mamabruja.com/wp-content/uploads/2021/10/ivan-jevtic-p7mo8-CG5Gs-unsplash-2-1200x800.jpg" alt="">  
                    
                    <div class="txt">
                    
                        <h3 class="name">Rosa</h3>
                        <h3 class="sci-name">Rosalius</h3>

                    </div>

                </div>
            
            </body>
        
        `;
    }
}

export default plantCard;