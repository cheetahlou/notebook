import{_ as n,o,c as p,a as s,S as a,k as l}from"./chunks/framework.b12503b9.js";const f=JSON.parse('{"title":"操作系统基础知识","description":"","frontmatter":{},"headers":[],"relativePath":"计算机基础/计算机基础/操作系统.md","filePath":"计算机基础/计算机基础/操作系统.md"}'),t={name:"计算机基础/计算机基础/操作系统.md"},e=a("",788),r=a("",6),i=a("",15),c=l("p",null,"比如平常Nginx为何可以支持4W的QPS是因为它会使用目标平台上面最高效的I/O多路复用模型。",-1),g=l("h3",{id:"_4-异步io",tabindex:"-1"},[s("4 异步IO "),l("a",{class:"header-anchor",href:"#_4-异步io","aria-label":'Permalink to "4 异步IO"'},"​")],-1),h=l("img",{src:"https://edu-8673.oss-cn-beijing.aliyuncs.com/img2022.6.30/202207201649576.png",alt:"image-20220720164910509",style:{zoom:"50%"}},null,-1),u=a("",10),d=a("",9),C=a("",17),y=a("",276);function m(A,D,b,F,q,P){return o(),p("div",null,[e,s(" 阻塞IO情况下，当用户调用`read`后，用户线程会被阻塞，等内核数据准备好并且数据从内核缓冲区拷贝到用户态缓存区后`read`才会返回。可以看到是阻塞的两个部分。 "),r,s(" 非阻塞情况下无可用数据时，应用程序每次轮询内核看数据是否准备好了也耗费CPU，能否不让它轮询，当内核缓冲区数据准备好了，以事件通知当机制告知应用进程数据准备好了呢？应用进程在没有收到数据准备好的事件通知信号时可以忙写其他的工作。此时**IO多路复用**就派上用场了。 "),i,s(" 横轴 Dead connections 是链接数的意思，叫这个名字只是它的测试工具叫deadcon。纵轴是每秒处理请求的数量，可看到epoll每秒处理请求的数量基本不会随着链接变多而下降的。poll 和/dev/poll 就很惨了。但 epoll 有个致命的缺点是只有**linux**支持。 "),c,g,h,s(" 然后你会发现上面的提到过的操作都不是真正的异步，因为两个阶段总要等待会儿！而真正的异步 I/O 是内核数据准备好和数据从内核态拷贝到用户态这两个过程都不用等待。 "),u,s(" 可发现，用户在调用之后会立即返回，由内核完成数据的拷贝工作，并通知用户线程，进行回调。 "),d,s(" **BIO特点**： "),C,s(" 每个线程中包含一个`Selector`对象，它相当于一个通道管理器，可以实现在一个线程中处理多个通道的目的，减少线程的创建数量。远程连接对应一个channel，数据的读写通过buffer均在同一个`channel`中完成，并且数据的读写是非阻塞的。通道创建后需要注册在`selector`中，同时需要为该通道注册感兴趣事件（客户端连接服务端事件、服务端接收客户端连接事件、读事件、写事件)，`selector`线程需要采用`轮训`的方式调用`selector`的`select`函数，直到所有注册通道中有兴趣的事件发生，则返回，否则一直阻塞。而后循环处理所有就绪的感兴趣事件。以上步骤解决BIO的两个瓶颈： "),y])}const _=n(t,[["render",m]]);export{f as __pageData,_ as default};
