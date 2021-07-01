import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class DepartmentService{

  departments=[
    {
      name:'هندسة و علوم الحاسبات',
      children: false,
      content:[
        {
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },
        {
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },{
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },{
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
      ],
      tables:[
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },

      ]
    },
    {
      name:'هندسة الإلكترونيات و الإتصالات الكهربية',
      children: false,
      content:[
        {
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },
        {
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },{
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },{
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
      ],
      tables:[
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },

      ]
    },
    {
      name:'هندسة الإلكترونيات الصناعية والتحكم',
      children: false,
      content:[
        {
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },
        {
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },{
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },{
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
      ],
      tables:[
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },

      ]
    },
    {
      name:'الفيزيقا والرياضيات الهندسية',
      children: false,
      content:[
        {
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },
        {
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },{
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },{
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
      ],
      tables:[
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },

      ]
    },
    {
      name: 'البرامج الخاصة',

      children: true,
      content:[
        {
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },
        {
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },{
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
        {
          head: 'رئيس القسم',
          body:'بالصلى على النبي كده رئيس القسم بتاعنا ملهوش زى '
        },{
          head:'عن القسم',
          body:'ركبنى المرجيحة ...حلوة اوى ومريحة ي فندم والله ... بكام بقا المرجيحة دى'
        },
      ],

    },
  ]

  children = [
    {
      name:'الهندسة الطبية الحيوية',
      content:[
        {
          head: 'عن البرنامج',
          body: ' ههههههههههههههههههههههه قسم طبية'
        }
      ],
      tables:[
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },

      ]
    },
    {
      name:'هندسة التحكم الصناعي',
      content:[
        {
          head: 'عن البرنامج',
          body: ' ههههههههههههههههههههههه قسم طبية'
        }
      ],
      tables:[
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },

      ]
    },
    {
      name:'هندسة الشبكات و الإتصالات',
      content:[
        {
          head: 'عن البرنامج',
          body: ' ههههههههههههههههههههههه قسم طبية'
        }
      ],
      tables:[
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPYt7IXHz7wfLR0fVgd7g2zwupX5GQsVnhQ&usqp=CAU',
          title:'جدول امتحانات الفصل الدراسي الثانى للعام الجامعى 2021/2020',
          date: '17/06/2021',
          desc:'تمهيدي دكتوراه اتصالات دورة اكتوبر 2020'
        },

      ]
    },
  ]

  obj = new EventEmitter<{name:string , children:boolean , content:[] , tables:[] }|any>();
  body = new EventEmitter<any>();
  currentObj: number |any;

  getDepartments(){
    return this.departments.slice();
  }

  getSingleDepartment(id:number){
    return this.departments[id];
  }

  getChildren(){
    return this.children.slice();
  }

}
