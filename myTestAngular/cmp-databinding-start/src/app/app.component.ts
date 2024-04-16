import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // tutte le proprietà dei componenti sono accessibili solo dall'interno dei componenti stessi

    serverElements = [
        {type:'server',name:'TestServer',content:'Just a test'},
        {type:'server',name:'TestServer2',content:'Just a test2'}
    ];

    // Il metodo accetta un oggetto serverData,
    // il metodo viene utilizzato nell app.component
    // il quale richiede dei dati a cockpit.component.ts
    // abbiamo collegato una proprietà della classe in app.component tramite event-binding
    onAddServer(serverData:{serverName:string, serverContent:string}) {
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }

    // Il metodo accetta un oggetto serverData
    onAddBlueprint(serverData:{serverName:string,serverContent:string}) {
        this.serverElements.push({
            type: 'blueprint',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }
}
