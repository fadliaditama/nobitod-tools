import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./footer.component";

const routes: Routes = [
    {
        path: '',
        component: FooterComponent,
        children: [
            // {
            //     path: '',
            //     component: VerifikasiBerkasListComponent
            // },
            // {
            //     path: ':id',
            //     component: VerifikasiBerkasFormComponent,
            //     resolve: {
            //         task: VerifikasiBerkasFormResolver
            //     },
            // }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FootersRoutingModule { }
