import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/Products/products.component';
import { OpratorsComponent } from './Components/oprators/oprators.component';
import { PromiseComponent } from './Components/promise/promise.component';
import { HomeComponent } from './Components/home/home.component';
import { ObservableComponent } from './Components/observable/observable.component';
import { AllComponent } from './Components/observable/all/all.component';
import { FromEventComponent } from './Components/observable/from-event/from-event.component';
import { IntervalComponent } from './Components/observable/interval/interval.component';
import { OfAndFromComponent } from './Components/observable/of-and-from/of-and-from.component';
import { ToarrayComponent } from './Components/observable/toarray/toarray.component';
import { CustomObservableComponent } from './Components/observable/custom-observable/custom-observable.component';
import { MapComponent } from './Components/observable/map/map.component';
import { PluckComponent } from './Components/observable/pluck/pluck.component';
import { FilterComponent } from './Components/observable/filter/filter.component';
import { TapComponent } from './Components/observable/tap/tap.component';
import { TakeComponent } from './Components/observable/take/take.component';
import { RetryComponent } from './Components/observable/retry/retry.component';
import { DebouncetimeComponent } from './Components/observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './Components/observable/subject/subject.component';
import { ReplaySubjectComponent } from './Components/observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Components/observable/async-subject/async-subject.component';
import { ConcatComponent } from './Components/observable/concat/concat.component';
import { MergeComponent } from './Components/observable/merge/merge.component';
import { MergemapComponent } from './Components/observable/mergemap/mergemap.component';
import { ConcatmapComponent } from './Components/observable/concatmap/concatmap.component';
import { Concatmap2Component } from './Components/observable/concatmap2/concatmap2.component';
import { SwitchmapComponent } from './Components/observable/switchmap/switchmap.component';
import { Switchmap2Component } from './Components/observable/switchmap2/switchmap2.component';
import { ExhaustmapComponent } from './Components/observable/exhaustmap/exhaustmap.component';
import { SharereplayComponent } from './Components/observable/sharereplay/sharereplay.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'promise', component: PromiseComponent },

  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: AllComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'ofandfrom', component: OfAndFromComponent },
      { path: 'toArray', component: ToarrayComponent },
      { path: 'custom-observable', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debouncetime', component: DebouncetimeComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replay-subject', component: ReplaySubjectComponent },
      { path: 'async-subject', component: AsyncSubjectComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'mergemap', component: MergemapComponent },
      { path: 'concatmap', component: ConcatmapComponent },
      { path: 'concatmap2', component: Concatmap2Component },
      { path: 'switchmap', component: SwitchmapComponent },
      { path: 'switchmap2', component: Switchmap2Component },
      { path: 'exhaustmap', component: ExhaustmapComponent },
      { path: 'sharereplay', component: SharereplayComponent },
    ],
  },

  {
    path: 'operators',
    component: OpratorsComponent,
    children: [{ path: 'products', component: ProductsComponent }],
  },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
