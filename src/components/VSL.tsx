const VSL = () => {
  return (
    <section className="py-20 px-4 bg-gradient-accent">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Assista ao Vídeo e Descubra Como <span className="text-primary">Transformar Seu Corpo</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja como o SlimNutri pode mudar sua vida em apenas 30 dias
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
          <video 
            controls 
            className="w-full aspect-video"
            poster="/placeholder.svg"
          >
            <source src="/vsl-slimnutri.mp4" type="video/mp4" />
            Seu navegador não suporta reprodução de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VSL;
