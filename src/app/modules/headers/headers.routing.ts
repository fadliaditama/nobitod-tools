import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeadersComponent } from "./headers.component";

const routes: Routes = [
    {
        path: '',
        component: HeadersComponent,
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
export class HeadersRoutingModule { }
