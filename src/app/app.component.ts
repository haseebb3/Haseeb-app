import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Haseeb-app';

  skills : string[] = ["html", "css", "js"];
  cities : string[] = ["Tokyo", "Paris", "New York", "London", "Sydney"];
  countries : Array<string> = ["Japan", "Canada", "Brazil", "Australia", "Germany"];
  names : Array<string> = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
  languages : string[] = ["JavaScript", "Python", "Java", "C++", "TypeScript"];
  colors : string[] = ["Crimson", "Emerald", "Sapphire", "Goldenrod", "Amethyst"];
  animals : string[] = ["Lion", "Elephant", "Dolphin", "Eagle", "Cheetah"];
  weekDays : string[]  = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  months : string[] = ["January", "April", "July", "October", "December"];
  toggleStates : boolean[] = [true, false, false, true, true];

  //paragraphs
  paragraphs : string[] = [
    'The First Paragraph: Angular makes it incredibly simple to bind data to your UI.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.',
    'The Second Paragraph: You can dynamically generate text structures from an array.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.',
    'The Third Paragraph: This layout approach keeps your HTML file clean and scalable.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.',
    'The Fourth Paragraph: Modern template control flow features zero footprint performance.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.',
    'The Fifth Paragraph: Simply modify this array to automatically update your interface.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.'
  ];

  tech : Array<string> = [
  'Artificial intelligence is rapidly shifting the landscape of modern web engineering frameworks todayCybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats..',
  'By automating redundant scripting tasks, developers can dedicate their schedules to user experienceCybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats. design.',
  'Cloud computing ensures applications scale globally instantly without localized server hardware setupsCybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats..',
  'Edge runtime rendering offers incredibly snappy response windows for end-users across the planet.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.',
  'Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.Cybersecurity frameworks must evolve continuously to outpace sophisticated distributed system threats.'
];

naturesParas : string[] = [
  'Preserving ancient forest ecosystems remains absolutely critical for global climate stabilization effortsPreserving ancient forest ecosystems remains absolutely critical for global climate stabilization efforts.Preserving ancient forest ecosystems remains absolutely critical for global climate stabilization efforts..',
  'Urban green spaces drastically lower community heat retention while boosting local biodiversity indexes.Preserving ancient forest ecosystems remains absolutely critical for global climate stabilization efforts.Preserving ancient forest ecosystems remains absolutely critical for global climate stabilization efforts.',
  'Renewable energy matrices are rapidly outpacing older fossil fuel generation architectures worldwide.Preserving ancient forest ecosystems remains absolutely critical for global climate stabilization efforts.Preserving ancient forest ecosystems remains absolutely critical for global climate stabilization efforts.',
  'Marine conservation zones protect endangered coral reefs from catastrophic industrial commercial fishing.Preserving ancient forest ecosystems remains absolutely critical for global climate stabilization efforts.Preserving ancient forest ecosystems remains absolutely critical for global climate stabilization efforts.',
  'Sustainable agricultural setups maximize seasonal crop yields while protecting essential topsoil nutrients.Preserving ancient forest ecosystems remains absolutely critical for global climate stabilization efforts.Preserving ancient forest ecosystems remains absolutely critical for global climate stabilization efforts.'
];

businessParagraphs: string[] = [
  'Data analytics provides companies with granular insights into exactly how consumers interact online.',
  'Optimizing conversion funnels ensures advertising budgets yield high returns on investment.',
  'Building authentic brand authority requires consistent messaging across every public communication channel.',
  'Agile project methodologies empower startup groups to pivot swiftly when market conditions shift.',
  'Exceptional customer support operations retain high-value enterprise clients far better than discounting.'
];

}
